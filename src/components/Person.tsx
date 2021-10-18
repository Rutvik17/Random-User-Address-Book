import React from 'react';
import {Redirect, useParams} from "react-router-dom";
import {useSelector} from "../redux/Store";
import RandomPerson from "../models/Person";
import {PARAMS} from "../models/Params";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faPhone, faMailBulk, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import '../scss/Person.scss';

const Person = () => {
    const params =                                  useParams<PARAMS>();
    const randomUsers =                             useSelector((state) => state.system.randomUsers);
    const [randomPerson, setRandomPerson] =         React.useState<RandomPerson>();
    const [loading, setLoading] =                   React.useState(true);
    React.useEffect(() => {
        const person = randomUsers.find((user) => {
            return user.login.uuid === params.id
        });
        setRandomPerson(person);
        setLoading(false);
    }, [params, randomUsers]);
    return (
        <>
            {randomPerson &&
                <div className="card-container">
                    <img
                        className="image"
                        src={randomPerson.picture.large}
                        alt={randomPerson.name.first}
                    />
                    <div className="text-sm leading-normal mt-2 mb-2 text-blueGray-400 font-bold uppercase">
                        <span className="pr-2 inline-block">
                            <FontAwesomeIcon icon={randomPerson.gender === 'male' ? faMale : faFemale} />
                        </span>
                        <h1 className="inline-block">{`${randomPerson.name.first} ${randomPerson.name.last}`}</h1>
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <span className="pr-2 inline-block">
                            Age:
                        </span>
                        <h1 className="inline-block">{randomPerson.dob.age}</h1>
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <span className="pr-2">
                            <FontAwesomeIcon icon={faCity} />
                        </span>
                        {randomPerson.location.city}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                        <span className="pr-2">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        {randomPerson.phone}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                        <span className="pr-2">
                            <FontAwesomeIcon icon={faMailBulk} />
                        </span>
                        {randomPerson.email}
                    </div>
                </div>
            }
            {!randomPerson && !loading && <Redirect to={'/'} />}
        </>
    )
};

export default Person;
