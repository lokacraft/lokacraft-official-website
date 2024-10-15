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


export default function FormDashboard() {
  const {formType} = useContext(LokacraftContext)
  const [projectId, setProjectId] = useState('');
  const [name, setname] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('starter');
  const [securityStatus, setSecurityStatus] = useState(false);
  const [domainStatus, setDomainStatus] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Topbar />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="starter">
            <div className="flex items-center">
              <TabsList>
                  {formType.map(mainForm => (
                        <TabsTrigger key={mainForm.id} value={`${mainForm.name}`}>{mainForm.name}</TabsTrigger>
                  ))}
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
                
              </div>
            </div>
            {formType.map(mainForm => (
                  <TabsContent key={mainForm.id} value={`${mainForm.name}`}>
                  <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                        <CardTitle>Form</CardTitle>
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
                        {/* {mainForm.specificForms.map((specificForm: any) => (
                              <TableRow key={specificForm.id}>
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
                              {specificForm.id}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                              {specificForm.collectionName}
                              </TableCell>
                              <TableCell>
                              <Badge variant="outline">{specificForm.status}</Badge>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                              {specificForm.description}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                              {specificForm.securityStatus === true ? (
                                    <>active</>
                              ): (
                                    <>inactive</>
                              )}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                              {specificForm.domainStatus === true ? (
                                    <>active</>
                              ): (
                                    <>inactive</>
                              )}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                              {specificForm.link}
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
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                              </DropdownMenu>
                              </TableCell>
                              </TableRow>
                        ))} */}
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
            ))}
          </Tabs>
        </main>
      </div>
    </div>
  )
}
