import LogRocket from "logrocket";

export const LogRocketApp = () => {
  // LogRocket need to be initialized on CSR
  if (typeof window !== "undefined") {
    // On Vercel only prodction has this env var
    if (process.env.NEXT_PUBLIC_LOGROCKET_APP_ID)
      LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APP_ID);
  }

  return null;
};
