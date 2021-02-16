function UserCard(props) {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;

  const styles = {
    border: isSelected ? '4px solid' : undefined,
  };

  const btnHandler = () => userSelector(id);

  return (
    <article style={styles}>
      <h1>
        Full Name: {firstName} {lastName}
      </h1>
      <p>ID: {id}</p>
      <button onClick={btnHandler}>Select User</button>
    </article>
  );
}

export default UserCard;
