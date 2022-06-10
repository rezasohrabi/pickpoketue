import React, { ReactElement } from 'react';
import { Header } from 'components';
import { QuestionDetail } from 'components/QuestionDetailPage/QuestionDetail';
import styled from 'styled-components';

const Main = styled.main`
  margin: 32px 56px 60px;
`;

export default function QuestionDetailPage(): ReactElement {
  return (
    <>
      <Header title='جزییات سوال' />
      <Main>
        <QuestionDetail
          id='1'
          questionerImage='https://randomuser.me/api/portraits/men/29.jpg'
          title='مشکل در واث در ری اکت'
          time='16:48'
          date='15/2/1373'
          answerCount={20}
          text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        />
      </Main>
    </>
  );
}
