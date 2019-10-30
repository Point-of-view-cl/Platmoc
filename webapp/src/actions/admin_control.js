import axios from 'axios';

import {
    TEST_LOCAL_FILTER_ONLY_ENABLED,
    TEST_LOCAL_FILTER_ONLY_DISABLED,
    SET_GLOBAL_CONFIG
} from './types';


export const changeAuth = (data) => async (dispatch) => {
    try {
        let body = JSON.stringify({ 
          marker_id: data.id,
          is_enable: data.enabledStatus
        });
        let config = {
            headers: { 
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.REACT_APP_API_KEY
            }
        };
        console.log(body);
        const res = await axios.post(process.env.REACT_APP_BASE_URL+'/markers/dev/update',body,config);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
  };
  
export const TESTlocalFilterAll= () => dispatch => new Promise((resolve, reject) => {
    dispatch({ type: SET_GLOBAL_CONFIG, payload:{adminEnabledFilter: 'none'}});
    resolve();
})

export const TESTlocalFilterOnlyEnabled= () => dispatch => new Promise((resolve, reject) => {
    //dispatch({ type: TEST_LOCAL_FILTER_ONLY_ENABLED, payload:null});
    dispatch({ type: SET_GLOBAL_CONFIG, payload:{adminEnabledFilter: 'enabled'}});
    resolve();
});

export const TESTlocalFilterOnlyDisabled= () => dispatch => new Promise((resolve, reject) => {
    //dispatch({ type: TEST_LOCAL_FILTER_ONLY_DISABLED, payload:null});
    dispatch({ type: SET_GLOBAL_CONFIG, payload:{adminEnabledFilter: 'disabled'}});
    resolve();
});

