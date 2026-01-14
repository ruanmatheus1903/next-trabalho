// src/app/agencia-do-trabalhor/servicos-ao-empregador/FormularioVagas.tsx
"use client";

import React, { useState } from 'react';

interface FormData {
  // Dados do Empregador
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  pontoReferencia: string;
  responsavel: string;
  email: string;
  celular: string;
  telefone: string;
  fax: string;
  
  // Dados da Vaga
  cargo: string;
  quantidadeVagas: string;
  descricaoVaga: string;
  escolaridade: string;
  experiencia: string;
  salario: string;
  horarioTrabalho: string;
  turnoTrabalho: string;
  
  // Benefícios
  valeTransporte: boolean;
  valeRefeicao: boolean;
  valeAlimentacao: boolean;
  planoSaude: boolean;
  planoSaudeAcomph: boolean;
  cestaBasica: boolean;
  seguroVida: boolean;
  convenioOdonto: boolean;
  diarias: boolean;
  outrosBeneficios: boolean;
  outrosBeneficiosDesc: string;
  
  // Dados da Seleção
  localSelecao: string;
  enderecoSelecao: string;
  dataSelecao: string;
  horaSelecao: string;
  documentosExigidos: string;
  observacoesSelecao: string;
  
  // PCD
  vagaPCD: boolean;
  tipoDeficiencia: string;
  acessibilidade: string;
}

interface FormularioVagasProps {
  onSuccess?: () => void;
}

export default function FormularioVagas({ onSuccess }: FormularioVagasProps) {
  const [formData, setFormData] = useState<FormData>({
    // Dados do Empregador
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    pontoReferencia: '',
    responsavel: '',
    email: '',
    celular: '',
    telefone: '',
    fax: '',
    
    // Dados da Vaga
    cargo: '',
    quantidadeVagas: '1',
    descricaoVaga: '',
    escolaridade: '',
    experiencia: '',
    salario: '',
    horarioTrabalho: '',
    turnoTrabalho: '',
    
    // Benefícios
    valeTransporte: false,
    valeRefeicao: false,
    valeAlimentacao: false,
    planoSaude: false,
    planoSaudeAcomph: false,
    cestaBasica: false,
    seguroVida: false,
    convenioOdonto: false,
    diarias: false,
    outrosBeneficios: false,
    outrosBeneficiosDesc: '',
    
    // Dados da Seleção
    localSelecao: '',
    enderecoSelecao: '',
    dataSelecao: '',
    horaSelecao: '',
    documentosExigidos: '',
    observacoesSelecao: '',
    
    // PCD
    vagaPCD: false,
    tipoDeficiencia: '',
    acessibilidade: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    'DADOS DO EMPREGADOR',
    'DADOS DA VAGA',
    'BENEFÍCIOS',
    'DADOS DA SELEÇÃO',
    'PCD'
  ];

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Formulário enviado:', formData);
    
    // Se tiver callback de sucesso, chama
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }
  };

  const resetForm = () => {
    setFormData({
      cnpj: '',
      razaoSocial: '',
      nomeFantasia: '',
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
      pontoReferencia: '',
      responsavel: '',
      email: '',
      celular: '',
      telefone: '',
      fax: '',
      cargo: '',
      quantidadeVagas: '1',
      descricaoVaga: '',
      escolaridade: '',
      experiencia: '',
      salario: '',
      horarioTrabalho: '',
      turnoTrabalho: '',
      valeTransporte: false,
      valeRefeicao: false,
      valeAlimentacao: false,
      planoSaude: false,
      planoSaudeAcomph: false,
      cestaBasica: false,
      seguroVida: false,
      convenioOdonto: false,
      diarias: false,
      outrosBeneficios: false,
      outrosBeneficiosDesc: '',
      localSelecao: '',
      enderecoSelecao: '',
      dataSelecao: '',
      horaSelecao: '',
      documentosExigidos: '',
      observacoesSelecao: '',
      vagaPCD: false,
      tipoDeficiencia: '',
      acessibilidade: '',
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: // DADOS DO EMPREGADOR
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CNPJ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="00.000.000/0000-00"
                  value={formData.cnpj}
                  onChange={(e) => handleChange('cnpj', e.target.value)}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RAZÃO SOCIAL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.razaoSocial}
                  onChange={(e) => handleChange('razaoSocial', e.target.value)}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NOME FANTASIA <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.nomeFantasia}
                  onChange={(e) => handleChange('nomeFantasia', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CEP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="00000-000"
                  value={formData.cep}
                  onChange={(e) => handleChange('cep', e.target.value)}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RUA <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.rua}
                  onChange={(e) => handleChange('rua', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  BAIRRO <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.bairro}
                  onChange={(e) => handleChange('bairro', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CIDADE <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.cidade}
                  onChange={(e) => handleChange('cidade', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ESTADO <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.estado}
                  onChange={(e) => handleChange('estado', e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="PE">Pernambuco</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="PR">Paraná</option>
                  <option value="SC">Santa Catarina</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PONTO DE REFERÊNCIA
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.pontoReferencia}
                  onChange={(e) => handleChange('pontoReferencia', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RESPONSÁVEL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.responsavel}
                  onChange={(e) => handleChange('responsavel', e.target.value)}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-MAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CELULAR <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="(00) 00000-0000"
                  value={formData.celular}
                  onChange={(e) => handleChange('celular', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  TELEFONE
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="(00) 0000-0000"
                  value={formData.telefone}
                  onChange={(e) => handleChange('telefone', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  FAX
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="(00) 0000-0000"
                  value={formData.fax}
                  onChange={(e) => handleChange('fax', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2: // DADOS DA VAGA
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CARGO <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Ex: Assistente Administrativo"
                  value={formData.cargo}
                  onChange={(e) => handleChange('cargo', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  QUANTIDADE DE VAGAS <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.quantidadeVagas}
                  onChange={(e) => handleChange('quantidadeVagas', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SALÁRIO
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Ex: R$ 2.500,00"
                  value={formData.salario}
                  onChange={(e) => handleChange('salario', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ESCOLARIDADE MÍNIMA
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.escolaridade}
                  onChange={(e) => handleChange('escolaridade', e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Fundamental Incompleto">Fundamental Incompleto</option>
                  <option value="Fundamental Completo">Fundamental Completo</option>
                  <option value="Médio Incompleto">Médio Incompleto</option>
                  <option value="Médio Completo">Médio Completo</option>
                  <option value="Superior Incompleto">Superior Incompleto</option>
                  <option value="Superior Completo">Superior Completo</option>
                  <option value="Pós-graduação">Pós-graduação</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  EXPERIÊNCIA
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Ex: 2 anos na área"
                  value={formData.experiencia}
                  onChange={(e) => handleChange('experiencia', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  TURNO DE TRABALHO
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.turnoTrabalho}
                  onChange={(e) => handleChange('turnoTrabalho', e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Diurno">Diurno</option>
                  <option value="Noturno">Noturno</option>
                  <option value="Misto">Misto</option>
                  <option value="Escala">Escala</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  HORÁRIO DE TRABALHO
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Ex: 08:00 às 17:00"
                  value={formData.horarioTrabalho}
                  onChange={(e) => handleChange('horarioTrabalho', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DESCRIÇÃO DA VAGA <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows={4}
                  value={formData.descricaoVaga}
                  onChange={(e) => handleChange('descricaoVaga', e.target.value)}
                  placeholder="Descreva as atividades, responsabilidades e requisitos da vaga..."
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3: // BENEFÍCIOS
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="valeTransporte"
                  checked={formData.valeTransporte}
                  onChange={() => handleCheckboxChange('valeTransporte')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="valeTransporte" className="ml-3 text-gray-700">
                  Vale Transporte
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="valeRefeicao"
                  checked={formData.valeRefeicao}
                  onChange={() => handleCheckboxChange('valeRefeicao')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="valeRefeicao" className="ml-3 text-gray-700">
                  Vale Refeição
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="valeAlimentacao"
                  checked={formData.valeAlimentacao}
                  onChange={() => handleCheckboxChange('valeAlimentacao')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="valeAlimentacao" className="ml-3 text-gray-700">
                  Vale Alimentação
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="planoSaude"
                  checked={formData.planoSaude}
                  onChange={() => handleCheckboxChange('planoSaude')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="planoSaude" className="ml-3 text-gray-700">
                  Plano de Saúde
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="planoSaudeAcomph"
                  checked={formData.planoSaudeAcomph}
                  onChange={() => handleCheckboxChange('planoSaudeAcomph')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="planoSaudeAcomph" className="ml-3 text-gray-700">
                  Plano de Saúde (Acompanhantes)
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="cestaBasica"
                  checked={formData.cestaBasica}
                  onChange={() => handleCheckboxChange('cestaBasica')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="cestaBasica" className="ml-3 text-gray-700">
                  Cesta Básica
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="seguroVida"
                  checked={formData.seguroVida}
                  onChange={() => handleCheckboxChange('seguroVida')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="seguroVida" className="ml-3 text-gray-700">
                  Seguro de Vida
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="convenioOdonto"
                  checked={formData.convenioOdonto}
                  onChange={() => handleCheckboxChange('convenioOdonto')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="convenioOdonto" className="ml-3 text-gray-700">
                  Convênio Odontológico
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="diarias"
                  checked={formData.diarias}
                  onChange={() => handleCheckboxChange('diarias')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="diarias" className="ml-3 text-gray-700">
                  Diárias
                </label>
              </div>
              
              <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                <input
                  type="checkbox"
                  id="outrosBeneficios"
                  checked={formData.outrosBeneficios}
                  onChange={() => handleCheckboxChange('outrosBeneficios')}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="outrosBeneficios" className="ml-3 text-gray-700">
                  Outros Benefícios
                </label>
              </div>
            </div>
            
            {formData.outrosBeneficios && (
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  DESCRIÇÃO DOS OUTROS BENEFÍCIOS
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows={3}
                  value={formData.outrosBeneficiosDesc}
                  onChange={(e) => handleChange('outrosBeneficiosDesc', e.target.value)}
                  placeholder="Descreva outros benefícios oferecidos..."
                />
              </div>
            )}
          </div>
        );

      case 4: // DADOS DA SELEÇÃO
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LOCAL DA SELEÇÃO
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Ex: Sede da empresa, Agência do Trabalhador, etc."
                  value={formData.localSelecao}
                  onChange={(e) => handleChange('localSelecao', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ENDEREÇO DA SELEÇÃO
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.enderecoSelecao}
                  onChange={(e) => handleChange('enderecoSelecao', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DATA DA SELEÇÃO
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.dataSelecao}
                  onChange={(e) => handleChange('dataSelecao', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  HORÁRIO DA SELEÇÃO
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.horaSelecao}
                  onChange={(e) => handleChange('horaSelecao', e.target.value)}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DOCUMENTOS EXIGIDOS
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows={3}
                  value={formData.documentosExigidos}
                  onChange={(e) => handleChange('documentosExigidos', e.target.value)}
                  placeholder="Liste os documentos necessários para a seleção..."
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  OBSERVAÇÕES
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows={3}
                  value={formData.observacoesSelecao}
                  onChange={(e) => handleChange('observacoesSelecao', e.target.value)}
                  placeholder="Informações adicionais sobre o processo seletivo..."
                />
              </div>
            </div>
          </div>
        );

      case 5: // PCD
        return (
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <input
                type="checkbox"
                id="vagaPCD"
                checked={formData.vagaPCD}
                onChange={() => handleCheckboxChange('vagaPCD')}
                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="vagaPCD" className="ml-3 text-gray-700 font-medium text-lg">
                Esta vaga é destinada a Pessoa com Deficiência (PCD)
              </label>
            </div>
            
            {formData.vagaPCD && (
              <div className="space-y-4 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    TIPO DE DEFICIÊNCIA
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={formData.tipoDeficiencia}
                    onChange={(e) => handleChange('tipoDeficiencia', e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="Física">Física</option>
                    <option value="Visual">Visual</option>
                    <option value="Auditiva">Auditiva</option>
                    <option value="Intelectual">Intelectual</option>
                    <option value="Múltipla">Múltipla</option>
                    <option value="Reabilitado">Reabilitado</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ACESSIBILIDADE DISPONIBILIZADA
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    rows={4}
                    value={formData.acessibilidade}
                    onChange={(e) => handleChange('acessibilidade', e.target.value)}
                    placeholder="Descreva as condições de acessibilidade disponíveis (rampas, elevadores, banheiros adaptados, etc.)"
                  />
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-green-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Formulário Enviado com Sucesso!</h3>
        <p className="text-gray-600 mb-6">
          Sua oferta de vaga foi enviada para o Portal Emprega Brasil. Em breve a equipe do SINE de Jaboatão entrará em contato para dar continuidade ao processo.
        </p>
        <button
          onClick={resetForm}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Cadastrar Nova Vaga
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Stepper */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-between items-center relative">
          <div className="absolute top-4 left-0 right-0 h-2 bg-gray-200 rounded-full -z-10"></div>
          <div 
            className="absolute top-4 left-0 h-2 bg-blue-600 rounded-full -z-10 transition-all duration-300" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center mb-4 md:mb-0 flex-1 relative">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${currentStep >= index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 border-2 border-gray-300'}`}>
                {currentStep > index + 1 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="font-bold">{index + 1}</span>
                )}
              </div>
              <span className={`text-xs font-medium text-center ${currentStep >= index + 1 ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Título da Etapa Atual */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          {steps[currentStep - 1]}
        </h3>
        <p className="text-gray-600 mt-1">
          Preencha todas as informações solicitadas. Campos com <span className="text-red-500">*</span> são obrigatórios.
        </p>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 p-6 rounded-xl mb-8">
          {renderStep()}
        </div>

        {/* Botões de Navegação */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={prevStep}
            className={`px-6 py-3 border rounded-lg font-medium transition ${currentStep === 1 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
            disabled={currentStep === 1}
          >
            <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Anterior
          </button>
          
          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
            >
              Próximo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Enviar Formulário
            </button>
          )}
        </div>
      </form>
    </div>
  );
}