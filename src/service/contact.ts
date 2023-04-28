import { EmailData } from "./email";

// 컴포넌트에서는 비즈니스 로직을 분리시키는게 좋다
export async function sendContactEmail(email: EmailData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패함 🥲");
  }

  return data;
}
