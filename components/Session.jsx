import Talk from 'talkjs';

import { useEffect } from 'react';

export default function Chat() {
    useEffect(() => {
        Talk.ready.then(() => {
            const currentUser = new Talk.User({
                id: '1632',
                name: 'Kate Smith',
                email: 'katesmith@example.com',
                photoUrl: 'kate.jpeg',
                welcomeMessage: 'Hey there!',
                role: 'default',
            });
            const session = new Talk.Session({
                appId: 'bljweJ@gQZ}9',
                me: currentUser,
            });
        });
    }, []);
}
