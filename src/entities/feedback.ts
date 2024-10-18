import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('feedback_forms')
export default class Feedback {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @Column()
    lastName!: string;

  @Column()
    course!: string;

  @Column({ type: 'date' })
    sessionDate!: Date | null;

  @Column()
    link!: string;

  @Column()
    experience!: string;

  @Column('text')
    feedback!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;
}
