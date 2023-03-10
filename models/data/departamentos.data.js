import 'dotenv/config.js'
import '../../config/database.js'
import {Departamentos} from '../Departamentos.models.js'

let departamentos = [
    {departamento:"ADMINISTRACION*"},
    {departamento:"AEREOS*"},
    {departamento:"ASOCIADOS*"},
    {departamento:"BASSET*"},
    {departamento:"BRANDLIVE"},
    {departamento:"CALIDAD*"},
    {departamento:"CHASMA*"},
    {departamento:"CHASMA"},
    {departamento:"COMITE EJECUTIVO"},
    {departamento:"CORPORATE*"},
    {departamento:"DESARROLLO"},
    {departamento:"GERENCIA"},
    {departamento:"GRUPOS"},
    {departamento:"GRUPOS*"},
    {departamento:"GUARDIA*"},
    {departamento:"HELPIA*"},
    {departamento:"HELPIA"},
    {departamento:"ILS*"},
    {departamento:"IM"},
    {departamento:"INMOTION*"},
    {departamento:"LOGISTICA*"},
    {departamento:"LOGISTICA"},
    {departamento:"MARKETING*"},
    {departamento:"nodept"},
    {departamento:"ONLINE*"},
    {departamento:"OPERACIONES*"},
    {departamento:"OPERACIONES"},
    {departamento:"PRODUCTO*"},
    {departamento:"RRHH*"},
    {departamento:"SAC*"},
    {departamento:"SEGUROS"},
    {departamento:"SISTEMAS*"},
    {departamento:"TCM*"},
    {departamento:"TCM"},
    {departamento:"TICKETYA*"},
    {departamento:"TICKETYA"},
    {departamento:"TRASLADOS*"},
    {departamento:"TROOPS*"},
    {departamento:"TROOPS"},

]

Departamentos.insertMany(departamentos)