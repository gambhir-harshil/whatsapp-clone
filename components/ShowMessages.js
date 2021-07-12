import Message from './Message';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ShowMessages({ chat, messages }) {

    const [text, setText] = useState(JSON.parse(messages))

    const router = useRouter();
    const [messagesSnapshot] = useCollection(
        db
          .collection("chats")
          .doc(router.query.id)
          .collection("messages")
          .orderBy("timestamp", "asc")
      );

      if (messagesSnapshot) {
        return (
            <>
                {messagesSnapshot.docs?.map(message => (
                    <Message
                        key={message.id}
                        user={message.data().user}
                        message={{
                            ...message.data(),
                            timestamp: message.data().timestamp?.toDate().getTime(),
                }}
            />
                ))}
            </>
        )
    }else{
            return(
                <>
                    {text?.map(message => (
                    <Message key={message.id} user={message.user} message={message} />
            ))}
                </>
            )
    }

    return (
        <div>
            
        </div>
    )
}
