
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base-entity';
import { RevisionNoteResourceType } from './enums/resource-types';
import { Resource } from './resource';
import { RevisionNote } from './revision-note';

@Entity('revision_note_resource')
export class RevisionNoteResource extends BaseEntity {
  @Column()
    revision_note_id: number;

  @Column()
    resource_id: number;

  @Column({
    type: 'enum',
    enum: RevisionNoteResourceType,
    default: RevisionNoteResourceType.NOTE
  })
    resource_type: RevisionNoteResourceType;

  @ManyToOne(
    'RevisionNote',
    (revisionNote: RevisionNote) => revisionNote.resources,
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'revision_note_id' })
    revisionNote?: RevisionNote;

  @ManyToOne(
    'Resource',
    {
      onDelete: 'CASCADE',
    }
  )
  @JoinColumn({ name: 'resource_id' })
    resource?: Resource;
}