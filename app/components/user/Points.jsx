import { useTelegramAuth } from "@/app/TelegramAuthProvider";

export default function Points() {
  const { userInfo, isLoading } = useTelegramAuth();

  if (isLoading) {
    return <div className="text-xs">0...</div>;
  }

  if (!userInfo) {
    return (
      <>
        <div className="text-xs">000</div>
      </>
    );
  }

  return (
    <div>
      <p>{userInfo.points}</p>
    </div>
  );
}
