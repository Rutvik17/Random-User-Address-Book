import React, { Suspense } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Persons from "./components/Persons";
import Person from "./components/Person";
import {setLoading, setLoadMoreUsers, setRandomUsers} from "./redux/SystemReducer";
import {useDispatch} from "react-redux";
import {useSelector} from "./redux/Store";

function App() {
    const dispatch =                        useDispatch();
    const loadMoreUsers =                   useSelector((state) => state.system.loadMoreUsers);
    const fetchRandomUsers = React.useCallback(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                dispatch(setRandomUsers(data.results));
            })
            .catch((error) => {
                console.error('Error fetching data', error);
            })
            .finally(() => {
                dispatch(setLoading(false));
                dispatch(setLoadMoreUsers(false));
            });
    }, [dispatch]);
    React.useEffect(() => {
        fetchRandomUsers();
    }, [fetchRandomUsers]);
    React.useEffect(() => {
        if (loadMoreUsers) {
            setTimeout(() => {
                fetchRandomUsers();
            }, 1000);
        }
    }, [fetchRandomUsers, loadMoreUsers]);
  return (
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/" component={Persons} />
            <Route path="/:id" component={Person} />
              <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
