const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-lg bg-gray-100 items-center m-1">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s"
          alt="user-icon"
          className="h-7"
        />
      </div>

      <span className="text-black font-bold px-2">{name}</span>
      <span className="mx-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
