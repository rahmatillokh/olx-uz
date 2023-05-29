import React from 'react'
import {Logo} from "../../assets"
import "./Footer.css"

function Footer(props) {
  return (
    <div className='footer'>
        <div className="aboutOLX">
            <img src={ Logo } width="300px" alt="" />
            <p>Cервис объявлений № 1 в Узбекистане
                Частные объявления Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что искали.
                Нажав на кнопку "Подать объявление", вы сможете разместить онлайн-объявление на любую необходимую тематику - поиск работы, услуги, продажа автомобилей, недвижимости, электроники и многое другое.
                С помощью сервиса OLX в Узбекистане вы можете найти, продать или купить практически все, что угодно. Воспользовавшись функцией поиска, вы без труда найдете уже опубликованные объявления интересующей вас тематики.
                OLX в Узбекистане - ваш надежный и незаменимый помощник.</p>
        </div>
        <div className="razdel">
            <p>

            </p>
        </div>
        <div className="footer__links">
                <ul className="collections">
                {
                    props.footer1.map((item, id)=>
                        <li key={id} className="item">{item.text}</li>
                    )
                }</ul>
                <ul className="collections">
                {
                    props.footer2.map((item, id)=>
                        <li key={id} className="item">{item.text}</li>
                    )
                }
                </ul>
                <ul className="links">
                {
                    props.footer3.map((item, id)=>
                        <img key={id} width="200px" src={item.text} alt="" />
                    )
                }
                </ul>
        </div>
    </div>
  )
}

export default Footer