"use client"

import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Sidebar from "@/components/material/admin/Sidebar"
import Logo from '../../../../public/images/lokacraft-logo.png'
import Topbar from "@/components/material/admin/Topbar"
import { LokacraftContext } from "../../../../context/lokacraftContext"
import { useContext, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, where } from "firebase/firestore"
import { db } from "../../../../firebase"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Dashboard() {
  const {project} = useContext(LokacraftContext)
  const [projectId, setProjectId] = useState('');
  const [name, setname] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('starter');
  const [securityStatus, setSecurityStatus] = useState(false);
  const [domainStatus, setDomainStatus] = useState(false);


  // Generate a random 6-digit ID with "starter-xxxxxx" format
  // const generateProjectId = () => {
  //   const randomNumber = Math.floor(1000000 + Math.random() * 9000000); // 6 digit number
  //   return `${type}-${randomNumber}`;
  // }
  const generateProjectId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    
    for (let i = 0; i < 12; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return `${type}-${randomString}`;
  };

  const isProjectIdUnique = async (projectId: string) => {
    const projectQuery = query(collection(db, "projects"), where("projectId", "==", projectId));
    const querySnapshot = await getDocs(projectQuery);
    return querySnapshot.empty; // true jika tidak ada projectId yang sama
  };

  const generateUniqueProjectId = async () => {
    let newProjectId = generateProjectId();
    let isUnique = await isProjectIdUnique(newProjectId);

    while (!isUnique) {
      newProjectId = generateProjectId(); // generate lagi jika tidak unik
      isUnique = await isProjectIdUnique(newProjectId);
    }

    return newProjectId;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newProjectId = await generateUniqueProjectId();

    try {
      await addDoc(collection(db, "projects"), {
        projectId: newProjectId, // Default to null or remove this if not needed
        type: type,
        name: name,
        description: description,
        status: status,
        link: link,
        securityStatus: securityStatus,
        domainStatus: domainStatus,
        updatedOn: serverTimestamp()
      });

      // Reset form values
      setProjectId('');
      setname('');
      setType('starter');
      setDescription('');
      setLink('');
      setStatus('');
      setSecurityStatus(false);
      setDomainStatus(false);

      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  // Function to handle deletion
const handleDelete = async (id: string) => {
  try {
    await deleteDoc(doc(db, "projects", id)); // Delete document based on its Firestore ID
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Topbar />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                {/* disini */}
                
                <Dialog>
      <DialogTrigger asChild>
      <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* project id */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              project type
            </Label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="col-span-3 border rounded-md p-2"
            >
              <option value="starter">Starter</option>
              <option value="business">Business</option>
              <option value="custom">Custom</option>
            </select>

          </div>
          {/* name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              name
            </Label>
            <Input
             type="text"
             value={name}
             onChange={(e) => setname(e.target.value)}
              className="col-span-3"
            />
          </div>
          {/* description */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              description
            </Label>
            <Input
             type="text"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          {/* link */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              link
            </Label>
            <Input
             type="text"
             value={link}
             onChange={(e) => setLink(e.target.value)}
              className="col-span-3"
            />
          </div>
          {/* status */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              status
            </Label>
            <Input
             type="text"
             value={status}
             onChange={(e) => setStatus(e.target.value)}
              className="col-span-3"
            />
          </div>
          {/* securityStatus */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              securityStatus
            </Label>
            <input
              type="checkbox"
              checked={securityStatus}
              onChange={(e) => setSecurityStatus(e.target.checked)}
              className="col-span-3"
            />
          </div>
          {/* domainStatus */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              domainStatus
            </Label>
            <input
              type="checkbox"
              checked={domainStatus}
              onChange={(e) => setDomainStatus(e.target.checked)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Project ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Description
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Security Status
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Domain Status
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Link
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {project.map((item) => (
                        <TableRow key={item.data.projectId}>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={Logo}
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                          {item.data.projectId}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                          {item.data.name}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.data.status}</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                          {item.data.description}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {item.data.securityStatus === true ? (
                              <>active</>
                            ): (
                              <>inactive</>
                            )}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {item.data.domainStatus === true ? (
                              <>active</>
                            ): (
                              <>inactive</>
                            )}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                          {item.data.link}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDelete(item.id)}>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
