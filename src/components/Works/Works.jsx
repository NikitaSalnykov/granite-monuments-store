import React from 'react'
import { Title } from '../Title/Title'
import { WorksList } from './WorksList'

const worksArr = [{img: 'https://24minus.ru/800/600/http/n1s1.hsmedia.ru/f4/ce/18/f4ce18a3caba67ba4b3fece6ed9013ca/728x546_1_a8a871283772294174b7a3d052012153@1701x1276_0xac120003_8647964911635433420.jpeg', title: "There’s a better way to talk with your customers.", description: "asdasdas", text: "Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price", buttonName: "Hello", link: "/monuments"}, {img: 'https://24minus.ru/800/600/http/n1s1.hsmedia.ru/f4/ce/18/f4ce18a3caba67ba4b3fece6ed9013ca/728x546_1_a8a871283772294174b7a3d052012153@1701x1276_0xac120003_8647964911635433420.jpeg', title: "There’s a better way to talk with your customers.", description: "asdasdas", text: "Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price", buttonName: "Hello", link: "/monuments"}, {img: 'https://24minus.ru/800/600/http/n1s1.hsmedia.ru/f4/ce/18/f4ce18a3caba67ba4b3fece6ed9013ca/728x546_1_a8a871283772294174b7a3d052012153@1701x1276_0xac120003_8647964911635433420.jpeg', title: "There’s a better way to talk with your customers.", description: "asdasdas", text: "Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price", buttonName: "Hello", link: "/monuments"},{img: 'https://24minus.ru/800/600/http/n1s1.hsmedia.ru/f4/ce/18/f4ce18a3caba67ba4b3fece6ed9013ca/728x546_1_a8a871283772294174b7a3d052012153@1701x1276_0xac120003_8647964911635433420.jpeg', title: "There’s a better way to talk with your customers.", description: "asdasdas", text: "Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price", buttonName: "Hello", link: "/monuments"},{img: 'https://24minus.ru/800/600/http/n1s1.hsmedia.ru/f4/ce/18/f4ce18a3caba67ba4b3fece6ed9013ca/728x546_1_a8a871283772294174b7a3d052012153@1701x1276_0xac120003_8647964911635433420.jpeg', title: "There’s a better way to talk with your customers.", description: "asdasdas", text: "Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch, and deliver help content right where your customers need it, all in one place, all for one low price", buttonName: "Hello", link: "/monuments"}]

export const Works = () => {
  return (
    <>
    <Title title={'Наші роботи'}/>
    <WorksList worksArr={worksArr}/>
    </>
  )
}
