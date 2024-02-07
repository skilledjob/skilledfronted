import Image from "next/image";

/**
 * @name Avatar
 * @description This component represents a user avatar, which can display an image or initials.
 *
 * @param {string} size - The size of the avatar. Options: "small", "medium", "large".
 * @param {string} image - The URL of the image to be displayed as the avatar.
 * @param {string} name - The name of the user, used to generate initials if no image is provided.
 * @param {boolean} rounded - Indicates whether the avatar should have rounded corners.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the avatar.
 *
 * @example
 * ```jsx
 * <Avatar size="medium" image="/path/to/image.jpg" name="John Doe" rounded={true} />
 * ```
 */

const getInitials = name => {
  const initials = name
    ?.split(" ")
    ?.map(word => word[0])
    ?.join("");
  return initials;
};

export const Avatar = ({ size = "large", image, name, rounded = true }) => {
  const sizeClass = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-20 h-20",
  }[size];

  const roundedClass = rounded ? "rounded-full" : "";

  return (
    <div
      className={`bg-[#222B40] dark:bg-[#171718] flex items-center justify-center ${sizeClass} ${roundedClass}`}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          className={`w-full h-full object-cover ring-2 ring-opacity-10 ${
            rounded ? "rounded-full" : "rounded-none"
          }`}
          height={64}
          width={64}
        />
      ) : (
        <span className="text-white text-sm font-semibold">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
};
