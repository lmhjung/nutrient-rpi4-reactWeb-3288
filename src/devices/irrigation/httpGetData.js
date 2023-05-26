import React, { useEffect, useReducer } from 'react';
import axios from 'axios';


const response = {}

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


// function User(props) {
//     useEffect(() => {
//         const { userId } = props;
//           fetch(`https://api.google.com/user/${userId}`)
//             .then(res => res.json())
//             .then(res => {
//               if (res.success) {
//                   console.log(`${res.user.name} 님 환영합니다`);
//               }
//           });      
//       }, []);
//   }

function Device_Data_From_Http() {

    // const [state, dispatch] = useReducer(reducer, {
    //     loading: false,
    //     data: null,
    //     error: null
    // });

    // const fetchUsers = async () => {
    //     console.log( 'http get data start' );
    //     dispatch({ type: 'LOADING' });
    //     try {
    //         const response = await axios.get( '/' );
    //         console.log( response )

    //         dispatch({ type: 'SUCCESS', data: response.data });
    //     } catch (e) {
    //         console.log( e )
    //         dispatch({ type: 'ERROR', error: e });
    //     }
    // };

    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    // const { loading, data: response, error } = state; // state.data 를 users 키워드로 조회

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!response) return null;
    // return (
    //     <>
    //         <ul>
    //             대한민국

    //             { response }

    //             {/* {users.map(user => (
    //                 <li key={user.id}>
    //                     {user.username} ({user.name})
    //                 </li>
    //             ))} */}

    //             {/* console.log( {user} ) */}

    //         </ul>
    //         <button onClick={fetchUsers}>다시 불러오기</button>
    //     </>
    // );

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
      });
    
      const fetchUsers = async () => {
        dispatch({ type: 'LOADING' });
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
          );
          dispatch({ type: 'SUCCESS', data: response.data });
        } catch (e) {
          dispatch({ type: 'ERROR', error: e });
        }
      };
    
      useEffect(() => {
        fetchUsers();
      }, []);
    
      const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회
    
      if (loading) return <div>로딩중..</div>;
      if (error) return <div>에러가 발생했습니다</div>;
      if (!users) return null;
      return (
        <>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.username} ({user.name})
              </li>
            ))}
          </ul>
          <button onClick={fetchUsers}>다시 불러오기</button>
        </>
      );

}

export default Device_Data_From_Http;
