import { Avatar } from "@/app/components/ui/avatar";
import { getCurrentUser } from "@/app/lib/user";

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <div className="text-white">
      <div>
        <Avatar
          name={user?.firstName + " " + user?.lastName}
          image={user?.profilePicture}
          size="large"
          rounded
          className="w-20 h-20"
          isEdit
        />
      </div>
    </div>
  );
};

export default Page;
