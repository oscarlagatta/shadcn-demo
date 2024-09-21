import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"


export default function ScorecardMenu() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Scorecard</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Create</MenubarItem>
                    <MenubarItem>Edit</MenubarItem>
                    <MenubarItem>View</MenubarItem>
                    <MenubarItem>Manage</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Delete</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Metrics</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Add</MenubarItem>
                    <MenubarItem>Edit</MenubarItem>
                    <MenubarItem>Delete</MenubarItem>
                    <MenubarItem>View</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Inventory</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>View</MenubarItem>
                            <MenubarItem>Manage</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Risk Categories</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Add Risk Category</MenubarItem>
                    <MenubarItem>Edit Risk Category</MenubarItem>
                    <MenubarItem>Delete Risk Category</MenubarItem>
                    <MenubarItem>View Risk Category</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>KPI</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Add KPI</MenubarItem>
                    <MenubarItem>Edit KPI</MenubarItem>
                    <MenubarItem>Delete KPI</MenubarItem>
                    <MenubarItem>View KPI</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Reports</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Create Report</MenubarItem>
                    <MenubarItem>View Reports</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Users</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Add User</MenubarItem>
                    <MenubarItem>Edit User</MenubarItem>
                    <MenubarItem>Delete User</MenubarItem>
                    <MenubarItem>View User</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>More...</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>View Scorecard</MenubarItem>
                    <MenubarItem>Update Scorecard</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Manage Risk Categories</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Add Risk Category</MenubarItem>
                            <MenubarItem>Update Risk Category</MenubarItem>
                            <MenubarItem>Delete Risk Category</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Manage Key Performance Indicators</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Add KPI</MenubarItem>
                            <MenubarItem>Update KPI</MenubarItem>
                            <MenubarItem>Delete KPI</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Download Scorecard Report</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
        // <Menubar>
        //     <MenubarMenu>
        //         <MenubarTrigger>Scorecard</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Create</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Create new Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Edit</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Edit existing Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>View</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>View Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Manage</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Manage Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSeparator />
        //             <MenubarItem>Delete Scorecard</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>Metrics</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarItem>Add Metrics</MenubarItem>
        //             <MenubarItem>Edit Metrics</MenubarItem>
        //             <MenubarItem>Delete Metrics</MenubarItem>
        //             <MenubarItem>View Metrics</MenubarItem>
        //             <MenubarSeparator />
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Inventory</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>View Metric Inventory</MenubarItem>
        //                     <MenubarItem>Manage Metric Inventory</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSeparator />
        //             <MenubarItem>Metrics Management Screen</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>Risk Categories</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarItem>Add Risk Category</MenubarItem>
        //             <MenubarItem>Edit Risk Category</MenubarItem>
        //             <MenubarItem>Delete Risk Category</MenubarItem>
        //             <MenubarItem>View Risk Category</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>KPI</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarItem>Add KPI</MenubarItem>
        //             <MenubarItem>Edit KPI</MenubarItem>
        //             <MenubarItem>Delete KPI</MenubarItem>
        //             <MenubarItem>View KPI</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>Reports</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarItem>Create Report</MenubarItem>
        //             <MenubarItem>View Reports</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>Users</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarItem>Add User</MenubarItem>
        //             <MenubarItem>Edit User</MenubarItem>
        //             <MenubarItem>Delete User</MenubarItem>
        //             <MenubarItem>View User</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>Scorecard</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Create</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Create new Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Edit</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Edit existing Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>View</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>View Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Manage</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Manage Scorecard</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSeparator />
        //             <MenubarItem>Delete Scorecard</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>Bank Scorecard</MenubarTrigger>
        //         <MenubarContent>
        //             <MenubarItem>View Scorecard</MenubarItem>
        //             <MenubarItem>Update Scorecard</MenubarItem>
        //             <MenubarSeparator />
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Manage Risk Categories</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Add Risk Category</MenubarItem>
        //                     <MenubarItem>Update Risk Category</MenubarItem>
        //                     <MenubarItem>Delete Risk Category</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSeparator />
        //             <MenubarSub>
        //                 <MenubarSubTrigger>Manage Key Performance Indicators</MenubarSubTrigger>
        //                 <MenubarSubContent>
        //                     <MenubarItem>Add KPI</MenubarItem>
        //                     <MenubarItem>Update KPI</MenubarItem>
        //                     <MenubarItem>Delete KPI</MenubarItem>
        //                 </MenubarSubContent>
        //             </MenubarSub>
        //             <MenubarSeparator />
        //             <MenubarItem>Download Scorecard Report</MenubarItem>
        //         </MenubarContent>
        //     </MenubarMenu>
        //
        //
        // </Menubar>
    );
}
