import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imei: string;

    @Column()
    raw: string;

    @CreateDateColumn()
    createdAt: Date;
}