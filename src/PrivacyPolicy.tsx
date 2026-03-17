export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-amber-500 transition-colors"
        >
          ← 홈으로
        </a>

        <h1 className="mt-4 text-3xl font-bold text-stone-800">개인정보처리방침</h1>
        <p className="mt-2 text-sm text-stone-400">최종 업데이트: 2026년 3월 17일</p>

        <div className="mt-10 space-y-8 text-sm text-stone-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">1. 개요</h2>
            <p>
              yyyerin.co.kr(이하 "본 사이트")은 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 및
              관련 법령을 준수합니다. 본 방침은 본 사이트가 수집하는 정보와 그 활용 방법을 설명합니다.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">2. 수집하는 정보</h2>
            <p>본 사이트는 이용자로부터 직접 개인정보를 수집하지 않습니다. 다만, 아래와 같은 정보가 자동으로 수집될 수 있습니다.</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>방문 페이지, 접속 시간, 브라우저 종류, 운영체제 등 방문 기록</li>
              <li>IP 주소</li>
              <li>쿠키 및 유사 추적 기술을 통한 이용 행태 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">3. 쿠키(Cookie) 사용</h2>
            <p>
              본 사이트는 광고 게재 및 이용자 경험 개선을 위해 쿠키를 사용합니다. 쿠키는 브라우저에
              저장되는 소규모 텍스트 파일이며, 브라우저 설정에서 거부하거나 삭제할 수 있습니다.
              단, 쿠키를 비활성화하면 일부 기능이 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">4. 제3자 광고 서비스 (Google AdSense)</h2>
            <p>
              본 사이트는 Google AdSense를 통해 광고를 게재합니다. Google은 쿠키를 사용하여 이용자의
              관심사에 기반한 맞춤형 광고를 제공할 수 있습니다.
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Google의 광고 쿠키 사용으로 인해 이전 방문 기록을 바탕으로 광고가 표시될 수 있습니다.</li>
              <li>
                이용자는{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:underline"
                >
                  Google 광고 설정
                </a>
                에서 맞춤형 광고를 비활성화할 수 있습니다.
              </li>
              <li>
                Google의 개인정보 처리방침은{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:underline"
                >
                  여기
                </a>
                에서 확인하실 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">5. 정보의 이용 목적</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>사이트 운영 및 서비스 품질 개선</li>
              <li>광고 게재 및 광고 효과 분석</li>
              <li>이용 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">6. 정보의 제3자 제공</h2>
            <p>
              본 사이트는 법령에 의한 경우를 제외하고, 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
              단, Google AdSense 등 광고 서비스 제공자는 자체 정책에 따라 데이터를 수집·처리할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">7. 이용자의 권리</h2>
            <p>이용자는 다음의 권리를 행사할 수 있습니다.</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>개인정보 처리 현황 열람 요구</li>
              <li>개인정보 수정·삭제 요구</li>
              <li>개인정보 처리 정지 요구</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">8. 문의</h2>
            <p>
              개인정보처리방침에 관한 문의는 아래 연락처로 보내주세요.
            </p>
            <p className="mt-1">
              GitHub:{" "}
              <a
                href="https://github.com/hyr0208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                github.com/hyr0208
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-stone-800 mb-2">9. 방침 변경</h2>
            <p>
              본 개인정보처리방침은 법령 또는 서비스 변경에 따라 업데이트될 수 있으며, 변경 시 본 페이지에
              공지합니다.
            </p>
          </section>

        </div>
      </div>

      <footer className="border-t border-stone-200 py-8 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} yyyerin. All rights reserved.
      </footer>
    </div>
  );
}
