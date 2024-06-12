import shuffle from "just-shuffle";

export function holdsDraw (participants: string[]) {
    const totalParticipants = participants.length

    const scrambled = shuffle(participants)
    const result = new Map<string, string>()

    for(let index = 0; index < totalParticipants; index ++) {
        const indexFriend = index === (totalParticipants -1) ? 0 : index + 1;
        result.set(scrambled[index], scrambled[indexFriend])
    }

    return result

}
