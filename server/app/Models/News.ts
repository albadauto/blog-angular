import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class News extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public text: string;

  @column()
  public title: string;

  @column()
  public fk_id_user: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
