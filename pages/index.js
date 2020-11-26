import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import React, { Component } from 'react';
import { render } from 'react-dom';
const path = require('path');

export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <script src="accord.js"/>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Перечень выполненных проектов:</h2>
          <button className="accordion" onClick={myFunc} >Прототип сайта</button>
          <div className="panel">
              <p>Предмет:Веб-дизайн в профессиональной деятельности </p>
			     <p>Преподаватель: Тюжина Ирина Викторовна </p>
				 <p>Дата сдачи: 19.11.2020 </p>
				 <p>Прототип — это базовый макет сайта, который визуализирует расположение всех элементов и функций. Он позволяет наглядно проиллюстрировать все задумки, а также внести правки ценой минимальных усилий и расходов.
			  </p>
          </div>
          <button className="accordion" onClick={myFunc}>Модель телефона в Blender </button>
          <div className="panel">
              <p>Предмет:Мультимедиа-технологии в профессиональной деятельности </p>
			     <p>Преподаватель: Маврин Сергей Алексеевич </p>
				 <p>Дата сдачи: 25.11.2020 </p>
                 <MyImg src='https://i.ytimg.com/vi/6SOwJDqoPTw/maxresdefault.jpg'/>
				 <p>Blend4Web предлагает уникальный инструментарий для создания простых, сложных и очень сложных презентаций. Вам даже не обязательно уметь программировать — на помощь придет визуальный редактор логики, где простым перемещением блоков можно создать необходимую интерактивность. Вы можете использовать готовые настройки поведения камеры, всплывающие подсказки ключевых элементов для модели в презентации, создавать качественные материалы и реалистичное окружение. Затем вам достаточно выполнить экспорт проекта, и вы получите файлы для размещения на своем сервере или сайте, причем снабженных специальным плеером для удобного просмотра. </p>
          </div>
          <button className="accordion" onClick={myFunc}>Анимация двухмерных изображений</button>
          <div className="panel">
              <p></p>
          </div>
		  <button className="accordion" onClick={myFunc}>Демонстрационные обучающие приложения CamStudio</button>
          <div className="panel">
              <p></p>
          </div>
		  <button className="accordion" onClick={myFunc}>Контекстная диаграмма</button>
          <div className="panel">
              <p></p>
          </div>
		  <button className="accordion" onClick={myFunc}>Диаграмма декомпозиции​</button>
          <div className="panel">
              <p></p>
          </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Дипломные работы:</h2><hr></hr>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link><hr></hr>
            
            </li>
          ))}
        </ul>
      </section>
    </Layout>

  )
}

class MyImg extends Component {
    render() {
        const { src } = this.props;

        return (
            <img src={src} />
        );
    }
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        },

    }

}

function myFunc() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}
