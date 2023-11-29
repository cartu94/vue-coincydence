import { collectionRef } from './index.js';
import { getDocs, addDoc } from 'firebase/firestore/lite';

// Get a list of the documents in the collection
export async function getDocuments() {
  const querySnapshot = await getDocs(collectionRef);
  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({id: doc.id, ...doc.data()});
  });
  return documents;
}

// Add a new document, id is autogenerated.
export async function addDocument(data) {
  return await addDoc(collectionRef, data);
}
