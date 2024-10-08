"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import { db } from "../firebase";
import { LokacraftType } from "../types/projectData"; 
import {collection, getDocs, setDoc ,doc, query, where, orderBy, onSnapshot} from 'firebase/firestore'


const initialContext: LokacraftType = {
      formType: [],
      formClient: [],
      project: [],
      partner: [],
}
const LokacraftContext = createContext<LokacraftType>(initialContext);
type LokacraftProviderProps = {
      children: ReactNode;
  }
const LokacraftDataProvider = ({children}: LokacraftProviderProps) => {
      const [project, setProject] = useState<any[]>([])
      const [formType, setFormType] = useState<any[]>([])
      const [formClient, setFormClient] = useState<any[]>([])
      const [partner, setPartner] = useState<any[]>([])
      const [tangkiProducts, setTangkiProducts] = useState<any[]>([])
      useEffect(() => {
            const getProjectList = async () => {
                  const projectCollection = collection(db, 'projects');
                  const latestSnapshot = await query(projectCollection,
                        orderBy('name', 'asc'))
                        // where("categoryId", "==", "3BBTf9ETCmFCoVxutMwb"),
                  // const querySnapshot = await getDocs(latestSnapshot)
                  // setTangkiProducts(querySnapshot.docs.map(doc => {
                  //       return {
                  //             id: doc.id,
                  //             data: {
                  //                   id: doc.data().id,
                  //                   name: doc.data().name,
                  //                   categoryId: doc.data().categoryId,
                  //                   capacity: doc.data().capacity,
                  //             }
                  //       }
                  // }))
                  const unsubscribe = onSnapshot(latestSnapshot, (querySnapshot) => {
                        setProject(
                          querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            data: {
                              projectId: doc.data().projectId,
                              name: doc.data().name,
                              description: doc.data().description,
                              link: doc.data().link,
                              status: doc.data().status,
                              securityStatus: doc.data().securityStatus,
                              domainStatus: doc.data().domainStatus,
                            }
                          }))
                        );
                  });
                
                  // Cleanup function to unsubscribe from listener
                  return () => unsubscribe();
            }
            getProjectList()

      }, [])
      return (
            <LokacraftContext.Provider value={{ formType, formClient, project, partner }}>
                  {children}
            </LokacraftContext.Provider>
      )
}

export {LokacraftContext, LokacraftDataProvider}