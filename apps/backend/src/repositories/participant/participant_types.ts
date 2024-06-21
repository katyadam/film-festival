export type ParticipantUpdate = {
  name: string;
};

export type Participant = ParticipantUpdate & {
  id: number;
};

export type Role = 'DIRECTOR' | 'SCREEWRITER' | 'ACTOR';

export type FilmParticipant = {
  participantId: number;
  filmId: number;
  role: Role;
};
