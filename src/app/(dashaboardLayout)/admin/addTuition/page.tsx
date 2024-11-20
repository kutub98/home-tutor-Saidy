import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const AddTuition = () => {
  return (
    <Dialog>
      <div>
        <div className="flex flex-wrap items-center justify-between bg-white p-4 shadow my-2 gap-4">
          {/* Total Jobs */}
          <h1 className="lg:text-lg font-semibold text-gray-800">
            Total Jobs: <span className="text-primary font-bold">{100}</span>
          </h1>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xs">
            <Input
              type="search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search jobs..."
              aria-label="Search jobs"
            />
            <CiSearch
              className="absolute top-1/2 right-3 text-gray-500 transform -translate-y-1/2"
              size={20}
            />
          </div>

          {/* Add Job Button */}
          <DialogTrigger asChild>
            <Button
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
              variant="outline"
            >
              Edit Profile
            </Button>
          </DialogTrigger>
        </div>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when {"you're"}
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};
export default AddTuition;
