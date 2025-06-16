import React from 'react';

const CompanyOverview: React.FC = () => {
  return (
    <div className="w-full">
      {/* LUMEX Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">『LUMEX』</h2>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">자동차 생산 자동화의 미래를 선도합니다.</h3>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                『LUMEX』는 자동차 제조 산업의 혁신과 효율성을 극대화하기 위해 
                최첨단 자동화 솔루션을 제공합니다.
              </p>

              <p>
                스마트 팩토리 기술과 AI 기반 자동화를 통해 생산 공정을 최적화하고, 
                글로벌 자동차 산업에 완벽하게 통합될 수 있는 턴키 솔루션을 
                제공합니다.
              </p>

              <p>
                혁신(Innovation), 신뢰성(Reliability), 그리고 탁월함(Excellence)을 핵심 
                가치로 삼아, 우리는 자동차 제조의 미래를 선도하는 데 전념하고 
                있습니다.
              </p>

              <p>
                혁신적인 기술과 지속적인 지원을 바탕으로, LUMEX는 자동차 산업 
                발전을 이끄는 선두적인 글로벌 파트너로 자리잡고 있습니다.
              </p>

              <p>
                우리는 고객과 협력사와 함께 성장하며, 기대를 뛰어넘는 최고의 품질과 
                서비스를 제공하기 위해 끊임없이 노력하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">회사 개요</h2>
            
            <p className="text-lg mb-12 text-gray-700">
              『LUMEX』는 자동차 생산 라인 자동화 분야에 특화된 회사로써, 엔지니어링부터 대량 생산까지 이우르는 종합 솔루션을 제공합니다.
            </p>

            {/* Company Information Grid */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">회사명</span>
                  <span className="font-medium text-gray-900">루멕스 『LUMEX』</span>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">설립일</span>
                  <span className="font-medium text-gray-900">2025년 2월 14일</span>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">대표자</span>
                  <span className="font-medium text-gray-900">장민호</span>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">직원 수</span>
                  <span className="font-medium text-gray-900">10명 이상</span>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4 md:col-span-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">사업 분야</span>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 mb-2">자동차 자체 생산 공정 엔지니어링 및 정비 공급</p>
                    <p className="font-medium text-gray-900 mb-2">자동차 생산 프로젝트 관리, 정비 및 부품 공급</p>
                    <p className="font-medium text-gray-900">자재 관리, 물류 및 산업 정비 공급</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4 md:col-span-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">본사/공장</span>
                  <span className="font-medium text-gray-900">대한민국 경기도 시흥시 공단대로 341, 304호</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">VISION & MISSION</h2>
            
            {/* Vision Section */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-blue-600">V</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">비전</h3>
              </div>
              <div className="ml-16 space-y-6">
                <p className="text-2xl font-bold mb-6 text-gray-800">
                  'Luminous Next'를 기반으로 효율적인 제조를 위한<br />
                  기술 혁신에 전념합니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                  루멕스의 비전은 지능형 자동화와 최첨단 엔지니어링을 통해 자동차 제조의 미래를 
                  새롭게 정의하는 것입니다. 'LUMINOUS NEXT'를 핵심 원칙으로 삼아, 스마트 제조에서 
                  효율성, 정밀성, 그리고 혁신의 완계를 끊임없이 나가고자 합니다.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-blue-600">M</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">미션</h3>
              </div>
              <div className="ml-16 grid grid-cols-1 gap-12">
                <div className="mission-item">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-blue-900">MAXIMIZE EFFICIENCY</h4>
                    <div className="ml-1">
                      <p className="text-gray-500 text-lg mb-2">효율성 극대화</p>
                      <p className="text-lg text-gray-700">
                        생산 속도 및 비용 효율성을 최적화하는 스마트 자동화 솔루션 개발
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mission-item">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-blue-900">ENSURE PRECISION & RELIABILITY</h4>
                    <div className="ml-1">
                      <p className="text-gray-500 text-lg mb-2">정밀함과 신뢰성 보장</p>
                      <p className="text-lg text-gray-700">
                        고품질의 미래 지향적인 제조 기술을 제공
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mission-item">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-blue-900">LEAD INDUSTRY 4.0 TRANSFORMATION</h4>
                    <div className="ml-1">
                      <p className="text-gray-500 text-lg mb-2">4차 산업혁명 선도</p>
                      <p className="text-lg text-gray-700">
                        AI 기반 데이터 중심 자동화를 통해 글로벌 제조업체 지원
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mission-item">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold text-blue-900">FOSTER SUSTAINABLE GROWTH</h4>
                    <div className="ml-1">
                      <p className="text-gray-500 text-lg mb-2">지속 가능한 성장 촉진</p>
                      <p className="text-lg text-gray-700">
                        친환경적이고 확장 가능한 제조 기술 개발
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">조직도 및 주요 부서</h2>
            <p className="text-lg mb-12 text-gray-700">
              루멕스의 조직은 효율적인 경영과 명확한 책임 체계를 기반으로 구성되어 있습니다.
            </p>

            {/* Department Overview Grid */}
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {/* C.E.O */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">C.E.O</h3>
                <p className="text-gray-600 mb-3">Strategic Leadership</p>
                <p className="text-sm text-gray-700">전략적 리더십으로 회사의 비전과 장기적 성장을 이끌어 나갑니다.</p>
              </div>

              {/* Engineering and R&D */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Engineering and R&D</h3>
                <p className="text-gray-600 mb-3">Technical Innovation</p>
                <p className="text-sm text-gray-700">조직의 기술적 혁신을 책임으로 발전시켜 나갑니다.</p>
              </div>

              {/* Production & Quality */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Production & Quality</h3>
                <p className="text-gray-600 mb-3">Operational Excellence</p>
                <p className="text-sm text-gray-700">기준에 충실한 제조 공정의 효율성을 보장합니다.</p>
              </div>

              {/* Sales & Finance */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Sales & Finance</h3>
                <p className="text-gray-600 mb-3">Business Growth</p>
                <p className="text-sm text-gray-700">제품 판매와 회사의 유지/번성시 사업을 지속적으로 확장시 나갑니다.</p>
              </div>

              {/* HR */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">HR</h3>
                <p className="text-gray-600 mb-3">Talent Management</p>
                <p className="text-sm text-gray-700">전문인력의 채용과 육성을 담당합니다.</p>
              </div>
            </div>

            {/* Detailed Organization Structure */}
            <div className="border border-gray-200 rounded-lg p-8">
              <div className="flex flex-col">
                {/* Organization Chart Container */}
                <div className="flex items-start space-x-12">
                  {/* Level 1 - CEO */}
                  <div className="flex flex-col items-center pt-4">
                    <div className="border-2 border-blue-600 rounded px-6 py-3">
                      <h4 className="text-xl font-bold text-gray-900">C.E.O</h4>
                    </div>
                  </div>

                  {/* Level 2 - Main Divisions */}
                  <div className="flex-1">
                    <div className="grid grid-cols-4 gap-4">
                      {/* R&D Center */}
                      <div className="flex flex-col items-center">
                        <div className="border border-gray-200 rounded px-4 py-2 w-full text-center">
                          <h5 className="font-semibold text-gray-900">R&D Center</h5>
                          <p className="text-sm text-gray-500">연구개발 부서</p>
                        </div>
                      </div>

                      {/* Engineering & Technical Center */}
                      <div className="flex flex-col items-center">
                        <div className="border border-gray-200 rounded px-4 py-2 w-full text-center mb-4">
                          <h5 className="font-semibold text-gray-900">Engineering & Technical Center</h5>
                          <p className="text-sm text-gray-500">엔지니어링/기술부서</p>
                        </div>
                        <div className="space-y-2 w-full">
                          <div className="border border-gray-200 rounded px-3 py-1 text-sm text-center text-gray-700">Process Engineering</div>
                          <div className="border border-gray-200 rounded px-3 py-1 text-sm text-center text-gray-700">Equipment Design</div>
                          <div className="border border-gray-200 rounded px-3 py-1 text-sm text-center text-gray-700">Electrical Control</div>
                        </div>
                      </div>

                      {/* Manufacturing & QC Center */}
                      <div className="flex flex-col items-center">
                        <div className="border border-gray-200 rounded px-4 py-2 w-full text-center">
                          <h5 className="font-semibold text-gray-900">Manufacturing & QC, A/S Center</h5>
                          <p className="text-sm text-gray-500">제조, 품질관리, A/S센터</p>
                        </div>
                      </div>

                      {/* Management Support */}
                      <div className="flex flex-col items-center">
                        <div className="border border-gray-200 rounded px-4 py-2 w-full text-center">
                          <h5 className="font-semibold text-gray-900">Management Support</h5>
                          <p className="text-sm text-gray-500">경영지원부</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-center mt-8">
              각 부서는 각자의 분야에 대한 전문성과 책임의식을 기반으로 서로 유기적으로 협력하고 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyOverview; 