import { useTelegramAuth } from "@/app/TelegramAuthProvider";

export default function Profile() {
  const { userInfo, isLoading } = useTelegramAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userInfo) {
    return <div>Login to telegram</div>;
  }

  return (
    <div>
      <p>Welcome, {userInfo.username || userInfo.first_name}!</p>
    </div>
  );
}
