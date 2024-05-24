// import { Modal, Tooltip } from 'antd'
// import React, { useEffect, useState } from 'react'
// import { FaImdb } from 'react-icons/fa'
// import { MdPoll } from 'react-icons/md'
// import ReactPlayer from 'react-player'
// import "../components/css/PreviewModal.css";
// import { base_url } from '../components/VideoCard'
// import axios from "../axios";
// import request, {API_KEY} from "../request"

// /* both of this will close the model */

// const PreviewModal = ({visible,setVisible, data, url}) => {
//     const [movieD, setMovieD] = useState();
//     useEffect(() => {
//         axios.get(request.getMoviesDetails + `/${data?.id}?
//         api_key=${API_KEY}&language=en-us`).then((res) => {
//             setMovieD(res?.data)
//         })
//     }, []);
//   return (
//    <Modal centered
//     visible = {visible}
//    onCancel={() => setVisible(false)}
//    onOk={() => setVisible(false)}
//    width={1060}
//    footer={null}
//    destroyOnClose>
//  <div className='modal-container'>
// <div className="modal-container-left">
//     <ReactPlayer height={400}
//     width="100%"
//     light={`${base_url}${data?.backdrop_path}`}
//     url={url}
//     controls={true}
//     pip={true}/>
// </div>
// <div className="modal-container-right">
//     <h2 style={{
//         color: "#fff",
//         margin: "10px 0px",
//         fontWeight: "500"
//     }}> {data?.original_title || data?.title}</h2>
//     <span>
//         <small>
//             {/* {"Movie Tag Line"} */}
//             {movieD?.tagline}
//         </small>
//     </span>
//     <p>
//         {data?.overview}
//     </p>
//     <p>Run Time : {movieD?.runtime} Mins</p>
//     <p>Genre: {" "}
//     {
//         movieD?.genres?.map((_data, idx) => (
//             <span key={idx} >{_data?.name} || </span>
//         ))
//     }
       
//     </p>
//     <span 
//     style={{
//         display: "flex",
//         alignItems: "center"
//     }}>
//         <MdPoll size={30} style={{
//             marginRight: "10px"
//         }} />  {data?.vote_count} | {data?.release_date}
//     </span>
//     <span style={{
//         display: "flex",
//         alignItems: "center"
//     }}>
//         <FaImdb size={30} style={{
//             marginRight: "10px"
//         }} /> {data?.vote_average}
//     </span>
//     <span style={{
//         margin: "10px 0px"
//     }}>
//         Productions Houses : { " "}
//         {
//             movieD?.production_companies?.map((_, idx) => <Tooltip 
//             title={_?.name}
//             placement={"top"}
//             key= {idx}
//             >
//              <img 
//              src={`${base_url}${_?.logo_path}}`}
//              alt= "logo"
//              height={30}
//              width={100}
//              style={{
//                 margin: "0px 10px"
//              }} />   
    
//             </Tooltip>)
//         }
        
//     </span>
// </div>
//  </div>
//    </Modal>
//   )
// }

// export default PreviewModal
import { Modal, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { FaImdb } from 'react-icons/fa'
import { MdPoll } from 'react-icons/md'
import ReactPlayer from 'react-player'
import "../components/css/PreviewModal.css";
import { base_url } from '../components/VideoCard'

import request, { API_KEY } from "../Request"

import instance from '../axios'

const PreviewModal = ({ visible, setVisible, data, url }) => {
    const [movieD, setMovieD] = useState();
    
    useEffect(() => {
        if (data?.id) {
            const movieDetailsUrl = `${request.getMovieDetails}/${data.id}?api_key=${API_KEY}&language=en-US`;
            console.log("Fetching movie details from URL:", movieDetailsUrl);

            instance.get(movieDetailsUrl)
                .then((res) => {
                    setMovieD(res?.data);
                })
                .catch((error) => {
                    console.error("Error fetching movie details:", error);
                });
        }
    }, [data?.id]);
    return (
        <Modal
            centered
            visible={visible}
            onCancel={() => setVisible(false)}
            onOk={() => setVisible(false)}
            width={1060}
            footer={null}
            destroyOnClose
        >
            <div className='modal-container'>
                <div className="modal-container-left">
                    <ReactPlayer
                        height={400}
                        width="100%"
                        light={`${base_url}${data?.backdrop_path}`}
                        url={url}
                        controls={true}
                        pip={true}
                    />
                </div>
                <div className="modal-container-right">
                    <h2 style={{
                        color: "#fff",
                        margin: "10px 0px",
                        fontWeight: "500"
                    }}>{data?.original_title || data?.title}</h2>
                    <span>
                        <small>
                            {movieD?.tagline}
                        </small>
                    </span>
                    <p>{data?.overview}</p>
                    <p>Run Time: {movieD?.runtime} Mins</p>
                    <p>Genre: {" "}
                        {movieD?.genres?.map((genre, idx) => (
                            <span key={idx}>{genre?.name} || </span>
                        ))}
                    </p>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <MdPoll size={30} style={{ marginRight: "10px" }} /> {data?.vote_count} | {data?.release_date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <FaImdb size={30} style={{ marginRight: "10px" }} /> {data?.vote_average}
                    </span>
                    <span style={{ margin: "10px 0px" }}>
                        Production Houses: {" "}
                        {movieD?.production_companies?.map((company, idx) => (
                            <Tooltip
                                title={company?.name}
                                placement={"top"}
                                key={idx}
                            >
                                <img
                                    src={`${base_url}${company?.logo_path}`}
                                    alt="logo"
                                    height={30}
                                    width={100}
                                    style={{ margin: "0px 10px" }}
                                />
                            </Tooltip>
                        ))}
                    </span>
                </div>
            </div>
        </Modal>
    );
}

export default PreviewModal;

