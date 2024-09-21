import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Page() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
                '123456789'.split('').map((item) => (
                    <Card key={item}>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant='ghost'>Info</Button>
                            <Button >More</Button>
                        </CardFooter>
                    </Card>
                ))


            }
            <Card className="col-span-1 sm:col-span-3">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Name of your project" />
                            </div>
                        {/*    <div className="flex flex-col space-y-1.5">*/}
                        {/*        <Label htmlFor="framework">Framework</Label>*/}
                        {/*        <Select>*/}
                        {/*            <SelectTrigger id="framework">*/}
                        {/*                <SelectValue placeholder="Select" />*/}
                        {/*            </SelectTrigger>*/}
                        {/*            <SelectContent position="popper">*/}
                        {/*                <SelectItem value="next">Next.js</SelectItem>*/}
                        {/*                <SelectItem value="sveltekit">SvelteKit</SelectItem>*/}
                        {/*                <SelectItem value="astro">Astro</SelectItem>*/}
                        {/*                <SelectItem value="nuxt">Nuxt.js</SelectItem>*/}
                        {/*            </SelectContent>*/}
                        {/*        </Select>*/}
                        {/*    </div>*/}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>



        </div>
    );
}

export default Page;