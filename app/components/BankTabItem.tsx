"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { cn, formUrlQuery } from "@/lib/utils";

export const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!account) return null; // Prevent errors if account is undefined

  const isActive = appwriteItemId === account.appwriteItemId;

  const handleBankChange = () => {
    if (!account.appwriteItemId) return; // Avoid updating URL with invalid value

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account.appwriteItemId,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn("banktab-item", {
        "border-blue-600": isActive,
      })}
    >
      <p className={cn("text-16 line-clamp-1 flex-1 font-medium text-gray-500", {
        "text-blue-600": isActive,
      })}>
        {account.name}
      </p>
    </div>
  );
};
