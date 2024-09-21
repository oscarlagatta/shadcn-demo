import {Badge} from "@/components/ui/badge";

function Page() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <Badge capitalize={true}>default</Badge>
            <Badge variant='destructive'>destructive</Badge>
            <Badge variant='secondary'>secondary</Badge>
            <Badge variant='outline'>outline</Badge>
            <Badge capitalize={true} variant='info'>info</Badge>
            <Badge capitalize={true} variant='success'>success</Badge>
        </div>
    );
}

export default Page;