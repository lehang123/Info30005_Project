import React from 'react';
import Header from './Header'
import Footer from '../Footer'

function Patients(props){
    props.Background();
    return(
        <div>
            <Header {...props}/>
            <div className="white-container2">
                <article className="patients-review">
                    <div>img</div>
                    <div>text</div>
                </article>
                <article className="patients-review2">
                    <div>text</div>
                    <div>img</div>
                </article>
                <article className="patients-review">
                    <div>img</div>
                    <div>text</div>
                </article>
            </div>
            <Footer></Footer>
        </div>
        
    )
}
export default Patients