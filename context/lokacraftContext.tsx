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
            // get and call admin's project list
            const getProjectList = async () => {
                  const projectCollection = collection(db, 'projects');
                  const latestSnapshot = await query(projectCollection,
                        orderBy('name', 'asc'))
                        // where("categoryId", "==", "3BBTf9ETCmFCoVxutMwb"),
                  
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
                  console.log(unsubscribe)
                
                  // Cleanup function to unsubscribe from listener
                  return () => unsubscribe();
            }
            getProjectList()
            // get and call admin's form list
      //       const getFormList = async () => {
      //             const formsCollection = collection(db, 'formType'); // Koleksi utama
      //             const formDocsSnapshot = await getDocs(formsCollection); // Ambil dokumen
                  
      //             const formTypeData: any[] = [];
                
      //             // Loop per dokumen di 'formType'
      //             for (const formDoc of formDocsSnapshot.docs) {
      //               const formDocData = { id: formDoc.id, ...formDoc.data() };

      //               // Ambil nama sub-koleksi dari dokumen (misal array 'subCollections')
      //               const subCollections = formDocData.subCollections || []; // Nama sub-collections yang disimpan di dokumen
                    
      //               const specificForms: any[] = [];
                
      //               // Loop tiap sub-collection yang ada di array 'subCollections'
      //               for (const subCollection of subCollections) {
      //                 const specificFormsCollection = collection(db, `formType/${formDoc.id}/starter_kontruksi`);
      //                 const specificFormDocsSnapshot = await getDocs(specificFormsCollection); // Ambil dokumen dari sub-collection
                
      //                 // Map dokumen dari sub-collection ke array
      //                 specificFormDocsSnapshot.docs.forEach(specificFormDoc => {
      //                   specificForms.push({
      //                     id: specificFormDoc.id,
      //                     collectionName: subCollection, // Nama sub-collection (dinamis)
      //                     ...specificFormDoc.data(),
      //                   });
      //                 });
      //               }
      //           // Tambahkan specificForms ke formDocData
      // // formDocData.subCollection = specificForms;
      
      // // // Push ke formTypeData
      // // formTypeData.push(formDocData);
      //               // Push data formType dan sub-collection yang sudah dinamis
      //               formTypeData.push({
      //                     ...formDocData,
      //                     specificForms, // Data sub-collection dinamis ditambahkan ke formType
      //               });
      //             }
                
      //             setFormType(formTypeData); // Set state dengan data yang sudah diambil
      //       };

      //       getFormList();
      }, [])
      useEffect(() => {
            const getFormList = async () => {
                  const projectCollection = collection(db, 'formType');
                  const latestSnapshot = await query(projectCollection)
                        // where("categoryId", "==", "3BBTf9ETCmFCoVxutMwb"),
                  
                  const unsubscribe = onSnapshot(latestSnapshot, (querySnapshot) => {
                        setFormType(
                          querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data(),
                          }))
                        );
                  });
                  console.log(unsubscribe)
                
                  // Cleanup function to unsubscribe from listener
                  return () => unsubscribe();
            }
            getFormList()
          }, []);
        
          useEffect(() => {
            const fetchSubCollections = async () => {
              for (const formId in formType) {
                const subCollectionRef = collection(db, 'formType', formId);
                const subCollectionsSnapshot = await getDocs(subCollectionRef);
                subCollectionsSnapshot.forEach((subDoc) => {
                  console.log('Subcollection data:', subDoc.id, subDoc.data());
                  // Simpan data subcollection ke dalam state jika diperlukan
                });
              }
            };
            fetchSubCollections();
          }, [formType]);
      return (
            <LokacraftContext.Provider value={{ formType, formClient, project, partner }}>
                  {children}
            </LokacraftContext.Provider>
      )
}

export {LokacraftContext, LokacraftDataProvider}