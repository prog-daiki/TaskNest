import { auth, signOut } from "@/auth";

const HomePage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session?.user.name)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default HomePage;
