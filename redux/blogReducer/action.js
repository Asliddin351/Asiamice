import axios from 'axios'
import {GET_BLOG_DATA} from './actionType' 

export const getBlogData = () => async(dispatch) => {

    try {
        let ln = localStorage.getItem('lang')
        const {data} = await axios.get(`${process.env.BLOG_URL}`, {
            headers: {
                "Accept-Language": ln
              }
        });

        // const {data} = await axios.get(`http://127.0.0.1:8000/api/v1/blog/`, {
        //     headers: {
        //         "Accept-Language": ln
        //       }
        // });
        

        dispatch ({
            type: GET_BLOG_DATA,
            payload: data
        })
    }catch (e) {
        console.log(e)
    }


}