import { useTelegramAuth } from "@/app/TelegramAuthProvider";

export default function Points() {
  const { userInfo, isLoading, userPoints } = useTelegramAuth();

  if (isLoading) {
    return <div className="text-xs">0...</div>;
  }

  if (!userInfo) {
    return <div className="text-xs">000</div>;
  }

  return <div>{userPoints}</div>;
}
