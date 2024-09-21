import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

function Page() {
    return (
        <div className="h-[500px] flex justify-center items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="m-2">@shadcn</p>
        </div>
    );
}

export default Page;