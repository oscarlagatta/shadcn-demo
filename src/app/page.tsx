import {redirect} from "next/navigation";

export default function Home() {
  return (
    // <div>
    //   <h1>Home</h1>
    // </div>

      redirect('dashboard/home')
  );
}
