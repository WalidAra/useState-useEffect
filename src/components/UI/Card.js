/* eslint-disable no-lone-blocks */
import React from "react";
import { Button } from "@nextui-org/react";
import { User, Link } from "@nextui-org/react";
import { useUserContext } from "../context/user";

const Card = ({ username, fullName, image, bio, key }) => {
  const firstUser = useUserContext();
  return (
    <div
      key={key}
      className="w-72 text-[#606068] flex flex-col p-3  gap-3 rounded-lg bg-[#18181b]"
    >
      <div className="flex gap-3 w-full">
        <p className="flex items-center gap-1">
          {firstUser.firstUser.name.first}
        </p>
        <p className="flex items-center gap-1">
          {firstUser.firstUser.name.last}
        </p>
      </div>

      <div className="w-full flex justify-between items-center">
        <User
          name={fullName}
          description={
            <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
              @{username}
            </Link>
          }
          avatarProps={{
            src: image,
          }}
        />

        <Button color="primary" radius="full">
          Follow
        </Button>
      </div>

      <p className="">{bio}</p>

      <div className="flex gap-3 w-full">
        <p className="flex items-center gap-1">
          <span className="font-semibold">4</span> <p>Following</p>
        </p>
        <p className="flex items-center gap-1">
          <span className="font-semibold">97k</span> <p>Followers</p>
        </p>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="flex gap-2">
  <div className="p-1 border-2 border-solid rounded-full border-gray-700">
    <img className="rounded-full w-9 h-9" src={image} alt="" />
  </div>

  <div className="flex flex-col">
    <p className="font-medium text-white"> {username} </p>
    <p className=" text-sm font-medium">@{fullName}</p>
  </div>
</div>; */
}
