import styled from 'styled-components';
import { AnswerItem, AnswerItemProps } from '../AnswerItem';
import { SectionHeader } from '../styles';

const questions: AnswerItemProps[] = [
  {
    id: '1',
    authorImage: 'https://randomuser.me/api/portraits/men/29.jpg',
    fullName: 'سید مصطفی',
    time: '16:48',
    date: '15/2/1373',
    likeCount: 67,
    dislikeCount: 4,
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
  },
  {
    id: '1',
    authorImage: 'https://randomuser.me/api/portraits/men/23.jpg',
    fullName: 'سید مصطفی',
    time: '16:48',
    date: '15/2/1373',
    likeCount: 67,
    dislikeCount: 4,
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
  },
];

const StyledAnswerList = styled.div``;

export default function AnswerList() {
  return (
    <StyledAnswerList>
      <SectionHeader>پاسخ ها</SectionHeader>
      {questions.map(
        ({
          id,
          authorImage,
          fullName,
          time,
          date,
          likeCount,
          dislikeCount,
          text,
        }) => (
          <AnswerItem
            key={id}
            id={id}
            authorImage={authorImage}
            fullName={fullName}
            time={time}
            date={date}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
            text={text}
          />
        )
      )}
    </StyledAnswerList>
  );
}
