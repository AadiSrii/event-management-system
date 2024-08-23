const { AppDataSource } = require('../config/data-source');
const { Participant } = require('../entities/participant.entity');

class ParticipantService {
  constructor() {
    this.participantRepository = AppDataSource.getRepository(Participant);
  }

  async registerParticipant(participantData) {
    const participant = this.participantRepository.create(participantData);
    return await this.participantRepository.save(participant);
  }
}

module.exports = { ParticipantService };
