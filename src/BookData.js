const BookData = (props) => {
  const { bookName, author, publishYear } = props;
  console.log("props: ", props);

  return (
    <div>
      <div>{`שם הספר: ${bookName}`}</div>
      <div>{`שם הסופר: ${author}`}</div>
      <div>{`שנת הוצאה: ${publishYear}`}</div>
    </div>
  );
};

export default BookData;
