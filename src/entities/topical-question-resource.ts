
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import BaseEntity from './base-entity';
import { TopicalQuestionResourceType } from './enums';
import type Resource from './resource';
import type TopicalQuestion from './topical-question';

@Entity('topical_question_resource', { name: 'topical_question_resource' })
export default class TopicalQuestionResource extends BaseEntity {
  @Column()
    topical_question_id!: number;

  @Column()
    resource_id!: number;

  @Column({
    type: 'enum',
    enum: TopicalQuestionResourceType,
  })
    resource_type!: TopicalQuestionResourceType;

  @ManyToOne(
    'TopicalQuestion',
    (topicalQuestion: TopicalQuestion) => topicalQuestion.resourcesc,
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'topical_question_id' })
    topicalQuestion!: TopicalQuestion;

  @ManyToOne(
    'Resource',
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'resource_id' })
    resource!: Resource;
}
