import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PastPaper } from "./past-paper";
import { Resource } from "./resource";

export enum PastPaperResourceType {
  QUESTION_PAPER = "QUESTION_PAPER",
  MARKING_SCHEME = "MARKING_SCHEME",
  SOLUTION_BOOKLET = "SOLUTION_BOOKLET",
}

@Entity("past_paper_resource")
export class PastPaperResource {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  past_paper_id!: number;

  @Column()
  resource_id!: number;

  @Column({
    type: "enum",
    enum: PastPaperResourceType,
  })
  resource_type!: PastPaperResourceType;

  @ManyToOne(() => PastPaper, (pastPaper) => pastPaper.resources, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "past_paper_id" })
  pastPaper!: PastPaper;

  @ManyToOne(() => Resource, (resource) => resource.pastPaperResources, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "resource_id" })
  resource!: Resource;
}
