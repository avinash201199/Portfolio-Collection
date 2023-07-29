
            // Import the functions you need from the SDKs you need
            import {initializeApp} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
                apiKey: "AIzaSyDSdF8WsvzvAfPdmX38q6rTdztm_ldbjqc",
                authDomain: "portfolio-5eb79.firebaseapp.com",
                projectId: "portfolio-5eb79",
                storageBucket: "portfolio-5eb79.appspot.com",
                messagingSenderId: "555966021794",
                appId: "1:555966021794:web:b6295704e59cf1b743d7fb",
                measurementId: "G-EZ6B5Z1RY8"
            };
            // Import the functions you need from the SDKs you need
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            import {
                getFirestore,
                doc,
                setDoc
            } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

            const app = initializeApp(firebaseConfig);
            // Initialize Firebase
            const db = getFirestore();


            async function addUser() {
                const nameMessage = document.getElementById("nameMessage").value;
                const descMessage = document.getElementById("descMessage").value;
                document.getElementById("nameMessage").value ="";
                document.getElementById("descMessage").value ="";

                console.log(nameMessage);

                // Adding time stamp and changing status
                let timeStamp = Date.now();
                await setDoc(doc(db, "portfolio", nameMessage), {
                    time: new Date(timeStamp),
                    name: nameMessage,
                    desc: descMessage
                });

                alert("Message sent successfully");

            }


            document.getElementById('submitMessage').addEventListener('click',addUser);