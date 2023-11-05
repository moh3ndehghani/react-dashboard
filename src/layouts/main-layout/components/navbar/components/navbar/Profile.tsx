import Avatar from "assets/images/global/profile.jpg";

const Profile = () => {
  return (
    <div>
      <div
        className="w-[41px] h-[41px] bg-red-500 rounded-lg bg-center bg-cover bg-no-repeat cursor-pointer"
        style={{ backgroundImage: `url(${Avatar})` }}
      ></div>
    </div>
  );
};

export default Profile;
