import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from "./Spinner";
import {useSelector} from "../redux/Store";
import '../scss/Persons.scss';
import {useDispatch} from "react-redux";
import {setLoadMoreUsers} from "../redux/SystemReducer";

const Persons = () => {
    const dispatch =                        useDispatch();
    const loading =                         useSelector((state) => state.system.loading);
    const loadMoreUsers =                   useSelector((state) => state.system.loadMoreUsers);
    const randomUsers =                     useSelector((state) => state.system.randomUsers);
    const onScroll = React.useCallback((event) => {
        const target = event.target;
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            dispatch(setLoadMoreUsers(true));
        }
    }, [dispatch]);
    return (
        <div className="flex flex-col">
            {!loading &&
                <article className="randomPerson">
                    <header>
                        <h1 className="randomPerson__title"><span className="randomPerson__title--top">Nuvalence</span><span
                            className="randomPerson__title--bottom">Address Book</span></h1>
                    </header>
                    <main className="randomPerson__profiles" onScroll={(event) => onScroll(event)}>
                        {randomUsers.length && randomUsers.map((randomUser, index) => (
                            <div key={index}>
                                <Link to={`/${randomUser.login.uuid}`}>
                                    <article className="randomPerson__profile">
                                        <img src={randomUser.picture.medium} alt={randomUser.name.first}
                                             className="randomPerson__picture" />
                                        <span className="randomPerson__name">{randomUser.name.first}</span>
                                        <span className="randomPerson__value"><span>Age: </span>{randomUser.dob.age}</span>
                                    </article>
                                </Link>
                                {index === randomUsers.length - 1 && loadMoreUsers &&
                                    <div className="text-center">
                                        <Spinner />
                                    </div>
                                }
                            </div>
                        ))}
                    </main>
                </article>
            }
            <div className="text-center">
                {loading && <Spinner />}
            </div>
        </div>
    );
};

export default Persons;
