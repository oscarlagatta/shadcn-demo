'use client'
import {Button} from "@/components/ui/button";
import {ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon} from "@radix-ui/react-icons";

function Page() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <Button>button default</Button>
            <Button variant='destructive'>destructive button</Button>
            <Button variant='ghost'>ghost button</Button>
            <Button variant='link'>link button</Button>
            <Button variant='secondary'>secondary button</Button>
            <Button disabled>disabled button</Button>
            <Button variant='disabled'>Disabled Styled Button</Button>
            <Button variant='disabledOutline'>Disabled Outline Button</Button>
            <Button variant='success'>Success Button</Button>
            <Button onClick={() => console.log('Hello world')}>Click Me</Button>
            <Button variant='default' capitalize={false}>capitalize false button</Button>
            <Button variant="outline" size="icon">
                <ChevronRightIcon className="h-4 w-" />
            </Button>
            {/*variant can be used is if the screen  size is small then we may remove the icon from the button*/}
            <Button>
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
        </div>
    );
}

export default Page;